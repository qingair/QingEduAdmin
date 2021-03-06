'use strict';

// tag-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const tag = sequelize.define('tags', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate() {
        tag.belongsToMany(sequelize.models.articles, { through: 'tags_article', foreignKey: 'tagId', otherKey: 'articleId' });
      }
    }
  });

  tag.sync();

  return tag;
};
