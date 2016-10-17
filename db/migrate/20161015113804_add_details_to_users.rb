class AddDetailsToUsers < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :name, :string
  	add_column :users, :age, :integer
  	add_column :users, :number, :string
  	add_column :users, :school, :string
  	add_column :users, :section, :string
  	add_column :users, :standard, :string
  	add_column :users, :parentname, :string
  	add_column :users, :parentnumber, :string
  	add_column :users, :parentemail, :string
  	add_column :users, :relationship, :string
  end
end
