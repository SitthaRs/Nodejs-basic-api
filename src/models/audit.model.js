class AuditModel {
    constructor(){
        this.createdBy = {
            type: String
        }
        
        this.updatedBy = {
            type: String
        }

        this.deletedBy = {
            type: String
        }
    }
}

module.exports = AuditModel