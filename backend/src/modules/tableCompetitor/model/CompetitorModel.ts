import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@database/db';
import EventModel from '@/modules/tableEvent/model/EventModel';
import FisherModel from '@/modules/tableFisher/model/Fisher.model';

class CompetitorModel extends Model {}

CompetitorModel.init(
    {
        id_competitor: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        id_event: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'Competitor'
    }
);

/* Establecer relacion con las tablas PESCADOR y EVENTO */

export default CompetitorModel;

/* puede ser un BELONGTOMANY() */

EventModel.belongsToMany(FisherModel, {
    through: CompetitorModel, 
    foreignKey: 'id_event'
});

FisherModel.belongsToMany(EventModel, {
    through: CompetitorModel, 
    foreignKey: 'id_user'
});