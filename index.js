const express = require('express')

const {Comment: CommentModel, Post: PostModel, User: UserModel} = require('./models');

const app = express()

app.get('/users', async (req, res) => {

  // make realtion 1 : M, user -> post
  UserModel.hasMany(PostModel, {
    foreignKey: 'userId',
    sourceKey: 'id',
    as: 'posts'
  })

  PostModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    sourceKey: 'id',
    as: 'posts'
  })

  // make realtion 1 : M,   Post -> Comment
  PostModel.hasMany(CommentModel, {
    foreignKey: 'postId',
    sourceKey: 'id',
    as: 'comments'
  })

  CommentModel.belongsTo(PostModel, {
    foreignKey: 'postId',
    sourceKey: 'id',
    as: 'comments'
  })

  const users = await UserModel.findAll({
    where: { id: 2 },
    include: {
      model: PostModel,
      as: 'posts',
      include: {
        model: CommentModel,
        as: 'comments'
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