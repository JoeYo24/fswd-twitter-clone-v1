# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# seeds.rb

# Creating some sample users
User.create(username: 'john_doe', email: 'john@example.com', password: 'password123')
User.create(username: 'jane_smith', email: 'jane@example.com', password: 'password456')

# Creating tweets for the users
john = User.find_by(username: 'john_doe')
jane = User.find_by(username: 'jane_smith')

Tweet.create(message: 'Hello world!', user: john)
Tweet.create(message: 'I love Ruby on Rails!', user: jane)
Tweet.create(message: 'Rails is awesome!', user: john)
Tweet.create(message: 'Learning React now.', user: jane)
Tweet.create(message: 'Having a great day!', user: john)
Tweet.create(message: 'Excited about my new project.', user: jane)

puts 'Seeds executed successfully!'
