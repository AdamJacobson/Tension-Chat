Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]

    resources :messages, only: [:create]
    get 'messages/:channel_id', to: 'messages#index', as: 'messages_index'
  end
end
