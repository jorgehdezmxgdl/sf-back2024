const { sequelize } = require("./modelos/db/Connection");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const encryptly = require("encryptly");
const bodyParser = require("body-parser");
const express = require("express");
const initModels = require("./modelos/init-models");
const MailSender = require("./autentificacion/SendEmail");
const { Op, col } = require("sequelize");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/read", function (req, res) {
  const ENCRYPTION_KEY = "bXs4xK7UCh=-Q}5fa<RM";
  const data = encryptly.decrypt(
    "537833141925567522065c0d301354",
    ENCRYPTION_KEY
  );
  res.send(data);
});

app.post("/login", function (req, res) {
  const data = req.body;
  const { user, password } = data;
  if (user === "admin" && password === "admin12345") {
    const data = encryptly.encrypt(
      "Administrador General",
      "bXs4xK7UCh=-Q}5fa<RM"
    );
    jwt.sign(
      { data: data },
      "shhhhh",
      { expiresIn: "1h" },
      function (err, token) {
        res.status(200).send({ mensaje: "Ok", id: 2, token: token });
      }
    );
    return;
  }
  const models = initModels(sequelize);
  models.usuario
    .findOne({ where: { clave: user, passwd: password } })
    .then((user) => {
      if (user) {
        models.empleado
          .findOne({ where: { id: user.empleado_id } })
          .then((emp) => {
            if (emp) {
              const fullName =
                emp.id +
                " @ " +
                emp.nombre +
                " " +
                emp.apellido_paterno +
                " " +
                emp.apellido_materno;
              const data = encryptly.encrypt(fullName, "bXs4xK7UCh=-Q}5fa<RM");
              jwt.sign(
                { data: data },
                "shhhhh",
                { expiresIn: "1h" },
                function (err, token) {
                  res.status(200).send({ mensaje: "Ok", id: 2, token: token });
                }
              );
            }
          });
      } else {
        res.status(204).send('{"mensaje": "Usuario no encontrado!"}');
      }
    })
    .catch((error) => {
      res.status(504).send('{"mensaje": ' + error.message + "'}'");
    });
});

app.post("/empleados", async (req, res) => {
  const data = req.body;
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    fecha_nacimiento,
    genero,
    curp,
    numero_ss,
    rfc,
    imagen,
    email,
    telef_casa,
    telef_mobile,
    emergencia,
    telef_emergencia,
    estado_civil,
    tipo_sangre,
    domicilio,
    observaciones,
    codigo_postal,
    estadosPais,
    municipio,
    colonia,
    pais,
    departamento,
    puesto,
    jefe,
    salario,
    nombre_usuario,
    contrasena,
    contrasena2,
    tiempo_innactivo,
    fecha_ingreso,
    activo, 
    edicion
  } = data;
  const models = initModels(sequelize);
  const newEmp = await models.empleado
    .create({
      nombre,
      apellido_paterno,
      apellido_materno,
      fecha_nacimiento,
      genero,
      curp,
      numero_ss,
      rfc,
      imagen,
      email,
      telef_casa,
      telef_mobile,
      emergencia,
      telef_emergencia,
      estado_civil,
      tipo_sangre,
      activo,
      edicion,
    })
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "Error de CURP/RFC/Correo electrónico/Usuario ya existente....",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
  if (newEmp) {
    const id = newEmp.id;
    console.log(id);
  } else {
    console.log("no lo hizo!!!!");
  }
});

app.get("/empleados", async (req, res) => {
  const models = initModels(sequelize);
  await models.empleado.findAll({ where: { activo: true } }).then((result) => {
    res.status(200).send(result);
  });
});

app.put("/empleados", async (req, res) => {
  const data = req.body;
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    fecha_nacimiento,
    genero,
    curp,
    numero_ss,
    rfc,
    imagen,
    email,
    telef_casa,
    telef_mobile,
    emergencia,
    telef_emergencia,
    estado_civil,
    tipo_sangre,
    domicilio,
    observaciones,
    codigo_postal,
    estadosPais,
    municipio,
    colonia,
    pais,
    departamento,
    puesto,
    jefe,
    salario,
    nombre_usuario,
    contrasena,
    contrasena2,
    tiempo_innactivo,
    fecha_ingreso,
  } = data;
  const models = initModels(sequelize);
  await models.empleado
    .update(
      {
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento,
        genero,
        curp,
        rfc,
        imagen,
        email,
        telef_casa,
        telef_mobile,
        emergencia,
        telef_emergencia,
        estado_civil,
        tipo_sangre,
        activo,
        edicion,
      },
      { where: { id: data.id } }
    )
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "Error de CURP/RFC/Correo electrónico ya existente....",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
});

app.delete("/empleados", async (req, res) => {
  const data = req.body;
  const models = initModels(sequelize);
  console.log(data);
  await models.empleado
    .update({ activo: false }, { where: { id: data.id } })
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      res.status(500).send({ mensaje: error.message });
    });
});

app.get("/modulos", async (req, res) => {
  const models = initModels(sequelize);
  await models.modulo.findAll().then((result) => {
    if (res) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ mensaje: error.message });
    }
  });
});

app.post("/modulos", async (req, res) => {
  const data = req.body;
  const { nombre, activo } = data;
  console.log(data);
  const models = initModels(sequelize);
  await models.modulo
    .create({
      nombre,
      activo,
    })
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "El nombe del módulo ya existe...",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
});

app.get("/puestos", async (req, res) => {
  const models = initModels(sequelize);
  await models.tpuesto.findAll().then((result) => {
    if (res) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ mensaje: error.message });
    }
  });
});

app.get("/departamentos", async (req, res) => {
  const models = initModels(sequelize);
  await models.tdepartamento.findAll().then((result) => {
    if (res) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ mensaje: error.message });
    }
  });
});

app.post("/departamentos", async (req, res) => {
  const data = req.body;
  const { nombre, activo } = data;
  const models = initModels(sequelize);
  await models.tdepartamento
    .create({ nombre, activo })
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "Departamento ya existente....",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
});

app.put("/departamentos", async (req, res) => {
  const data = req.body;
  const { nombre, activo } = data;
  const models = initModels(sequelize);
  await models.tdepartamento
    .update(
      {
        nombre,
        activo,
      },
      { where: { id: data.id } }
    )
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "Departamento ya existente....",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
});

app.get("/puestos", async (req, res) => {
  const models = initModels(sequelize);
  await models.tpuesto.findAll().then((result) => {
    if (res) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ mensaje: error.message });
    }
  });
});

app.post("/puestos", async (req, res) => {
  const data = req.body;
  const { nombre, activo } = data;
  const models = initModels(sequelize);
  await models.tpuesto
    .create({ nombre, activo })
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "Puesto ya registrado....",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
});

app.put("/puestos", async (req, res) => {
  const data = req.body;
  const { nombre, activo } = data;
  const models = initModels(sequelize);
  await models.tpuesto
    .update(
      {
        nombre,
        activo,
      },
      { where: { id: data.id } }
    )
    .then((result) => {
      res.status(200).send({ mensaje: "Ok" });
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("Error de entrada duplicada:", error.message);
        res.status(500).send({
          mensaje: "Puesto ya registrado...",
        });
      } else {
        res.status(500).send({ mensaje: error.message });
      }
    });
});

app.post("/send-email", (req, res) => {
  const data = req.body;
  const { correo } = data;

  const models = initModels(sequelize);
  models.empleado
    .findOne({ where: { email: correo } })
    .then((user) => {
      if (user) {
        console.log("entra");
        const completo =
          user.nombre +
          " " +
          user.apellido_paterno +
          " " +
          user.apellido_materno;
        const transportConfig = {
          service: "Gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "jorgehdezmxgdl@gmail.com",
            pass: "rqwc gasu fajt zbfg",
          },
        };
        const mailSender = new MailSender(transportConfig);
        const mailOptions = {
          from: '"Jorge Hernandez" <jorgehdezmxgdl@gmail.com>',
          to: correo,
          subject: "Sólo Fragancias: Recuperación de contraseña",
          text: "Recueperación de contraseña",
          html:
            `<p>Hola ` +
            completo.toUpperCase() +
            `!</p>
               <p>Se solicitó un cambio de contraseña, si lo hiciste, haz click en el botón sino, favor de informarlo al área de sistemas.</p>
               <div align='center'>
               <form action="http://localhost:3000/?action=12" method="get">
                  <input style="cursor:pointer" type="submit" value="Recuperar contraseña">
               </form>
               </div>
               <p>Saludos cordiales.</p>
               <p>El equipo de: Sólo Fragancias.</p>
               <br/>
               <p><b>Este mensaje fué generado automáticamente, favor de no responderlo.</b></p>`,
        };
        mailSender.setMailOptions(mailOptions);
        console.log(mailSender.sendMail());
        res.status(200).send({ mensaje: "Ok" });
      } else {
        res.status(204).send('{"mensaje": "Usuario no encontrado!"}');
      }
    })
    .catch((error) => {
      res.status(504).send('{"mensaje": ' + error.message + "'}'");
    });
});

app.post("/cp", (req, res) => {
  const data = req.body;
  const { mcp } = data;
  const models = initModels(sequelize);
  models.tcodpostal
    .findAll({
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('cp')), 'cp']],
      where: { cp: { [Op.startsWith]: mcp } },
      order: [["cp", "ASC"]],
    })
    .then((user) => {
      if (user) {

        res.status(200).send(user);
      } else {
        res.status(204).send('{"mensaje": "CP no encontrado!"}');
      }
    })
    .catch((error) => {
      res.status(504).send('{"mensaje": ' + error.message + "'}'");
    });
});

app.post("/cp-plus", (req, res) => {
  const data = req.body;
  const { mcp } = data;
  const models = initModels(sequelize);

  models.tcodpostal.findAll({
    attributes: ['id', 'cp', 'colonia'],
    where: {
      cp: mcp
    },
    include: [
      {
        model: models.tcodmunicipio,
        as: 'tcodmunicipios',
        attributes: ['id', 'municipio'],
        where: {
          estado_id: { [Op.col]: 'tcodpostal.estado_id' } // Comparar campo de otra tabla
        }
      },
      {
        model: models.tcodestado,
        as: 'tcodestados',
        attributes: ['id', 'estado']
      }
    ],
    order: [
      ['colonia', 'ASC'],
      [sequelize.col('tcodmunicipios.municipio'), 'ASC']
    ], 
    distinct: true
  }).then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(204).send('{"mensaje": "CP no encontrado!"}');
      }
    })
    .catch((error) => {
      res.status(504).send('{"mensaje": ' + error.message + "'}'");
    });
});

app.get("/estados-inegi", async (req, res) => {
    const models = initModels(sequelize);
    const data = await models.tcodestado.findAll({
        attributes: ["id", "estado"],
        orderBy: "estado",
    });
    res.status(200).send(data);
});

app.get('/', (req, res) => {
  res.status(200).send('{"mensaje": "Servidor en línea..."}');
});

app.listen(5784, () => {
  console.log("Servidor corriendo en el puerto 5784");
});
