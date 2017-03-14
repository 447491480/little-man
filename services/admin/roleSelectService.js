/**
 * Created by chang on 2017/2/21.
 */
module.exports = {
    getRoleList : function (RoleId) {
        if(RoleId == 1) {
            return [2];
        } else if(RoleId == 2) {
            return [3,4];
        } else if(RoleId == 3) {
            return [3,4];
        } else {
            return []
        }
    }
};