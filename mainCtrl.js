module.exports = {
    
        addUser(req, res) {
          const db = req.app.get("db");
          db.addUser([req.body.name, req.body.email]).then(user => {
            res.json(user);
          });
        },
        addVehicle(req, res) {
          const db = req.app.get("db");
          db.addVehicle([req.body.make,req.body.model,req.body.year, req.body.owner_id]).then(vehicle => {res.json(vehicle);});
        },
        countVehiclesByOwner(req, res) {
          const db = req.app.get("db");
          db.countVehiclesByOwner(req.params.userId).then(vehicles => {
            res.json(vehicles);
          });
        },
        getVehiclesByID(req, res) {
          const db = req.app.get("db");
          db.getVehiclesByID(req.params.userId).then(vehicles => {
            res.json(vehicles);
          });
        },
        getVehiclesByQuery(req, res) {
          const db = req.app.get("db");
          if (req.query.userEmail) {
            return db.getVehiclesByEmail(req.query.userEmail).then(vehicles => {
              return res.json(vehicles);
            });
          }
          if (req.query.userFirstStart) {
            return db
              .searchByName(req.query.userFirstStart + "%")
              .then(name => {
                return res.json(name);
              });
          }
        },
        getVehiclesByYear(req, res) {
          const db = req.app.get("db");
          db.getVehiclesByYear().then(vehicles => {
            res.json(vehicles);
          });
        },
        getAllUsers(req, res) {
          const db = req.app.get("db");
          db.getAllUsers().then(users => {
            res.json(users);
          });
        },
        getAllVehicles(req, res) {
          const db = req.app.get("db");
          db.getAllVehicles().then(vehicles => {
            res.json(vehicles);
          });
        },
        changeOwner(req, res) {
          const db = req.app.get("db");
          db
            .changeOwner([req.params.vehicleId, req.params.userId])
            .then(owner => {
              res.json(owner);
            });
        },
        deleteOwner(req, res) {
          const db = req.app.get("db");
          db.deleteOwner([req.params.vehicleId]).then(owner => {
            res.json(owner);
          });
        },
        deleteVehicle(req, res) {
          const db = req.app.get("db");
          db.deleteVehicle([req.params.vehicleId]).then(id => {
            res.json(id);
          });
        }
      };
