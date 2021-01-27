const express = require('express')

const { Animal: AnimalModel, Farm: FarmModel, User: UserModel } = require('./models')


const app = express()

app.get('/users', async (req, res) => {

  // make realtion 1 : M, user -> Farm
  UserModel.hasMany(FarmModel, {
    foreignKey: 'userId',
    sourceKey: 'id',
    as: 'farms'
  })

  FarmModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    sourceKey: 'id',
    as: 'farms'
  })

  // make realtion 1 : M, Farm -> Animal
  FarmModel.hasMany(AnimalModel, {
    foreignKey: 'farmId',
    sourceKey: 'id',
    as: 'animals'
  })

  AnimalModel.belongsTo(FarmModel, {
    foreignKey: 'farmId',
    sourceKey: 'id',
    as: 'animals'
  })

  const users = await UserModel.findAll({
    where: { id: 2 },
    include: {
      model: FarmModel,
      as: 'farms',
      include: {
        model: AnimalModel,
        as: 'animals'
      }
    }
  })

    res.send({
      status: 200,
      data: users
    })
})

app.listen(3001, () => {
  console.log('SERVER RUNNING ON PORT 3001');
})