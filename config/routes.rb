Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]

    resources :messages, only: [:create]

    resources :teams, only: [:index, :show] do
      resources :channels, only: [:index]
      get '/channels/joined', to: "channels#joined"
      get '/channels/unjoined', to: "channels#unjoined"
      
      resources :users, only: [:index]
    end

    resources :channels, only: [:show, :create] do
      resources :messages, only: [:index]
    end
  end

  mount ActionCable.server => '/cable'
end
