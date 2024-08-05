var role;
(function (role) {
    role[role["NotFound"] = 404] = "NotFound";
    role[role["success"] = 200] = "success";
    role[role["Accepted"] = 202] = "Accepted";
    role[role["BadRequest"] = 400] = "BadRequest";
})(role || (role = {}));
;
console.log(role.success);
