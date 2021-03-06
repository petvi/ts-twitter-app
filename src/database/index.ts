import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
  'mysql://root:zaqwert123@localhost:3306/twitter'
)

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance extends Model {
  id: number
  name: string
  password: string
}

const UserModel = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  }
)

export async function doStuff() {
  const instance = await UserModel.findByPk(1, {
    rejectOnEmpty: true,
  })
  console.log(instance.id)
}
