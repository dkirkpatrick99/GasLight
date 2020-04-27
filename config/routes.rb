Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :campaigns
    resources :contributions
    resources :categories, only: [:index]
    resources :rewards
    resources :follows
  end

  root "static_pages#root"
end
