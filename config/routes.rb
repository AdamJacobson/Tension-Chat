Rails.application.routes.draw do
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
  end
end
