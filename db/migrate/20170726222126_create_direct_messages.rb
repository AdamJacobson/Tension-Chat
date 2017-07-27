class CreateDirectMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :direct_messages do |t|
      t.text    :body,          null: false
      t.integer :team_id,       null: false
      t.integer :recipient_id,  null: false
      t.integer :author_id,     null: false

      t.timestamps
    end

    add_index(:direct_messages, :recipient_id)
    add_index(:direct_messages, :author_id)
    add_index(:direct_messages, :team_id)
  end

end
