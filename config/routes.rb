Rails.application.routes.draw do
  namespace :api do
    get 'channels/index'
  end

  namespace :api do
    get 'channels/show'
  end

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]

    resources :messages, only: [:create]

    resources :teams, only: [:index, :show] do
      resources :channels, only: [:index]
    end

    resources :channels, only: [:show] do
      resources :messages, only: [:index]
    end

    # get 'messages/:channel_id', to: 'messages#index', as: 'messages_index'
    # get 'channels/:team_id', to: 'channels#index', as: 'channels_index'
  end
end
