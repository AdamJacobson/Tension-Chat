class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.integer :team_id, null: false
      t.integer :author_id, null: false
      t.string :name, null: false
      t.string :description

      t.timestamps
    end

    add_index(:channels, :team_id)
  end
end
