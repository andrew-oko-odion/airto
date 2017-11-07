Rails.application.routes.draw do

  get 'profiles/service'
  get 'profiles/user'
  get 'profiles/rental'
  get 'profiles/update_item'
  get 'profiles/dashboard'
  get 'profiles/listing'
  get 'profiles/update_listing'
  
  get 'items/categories'
  
  root 'home#index'
  # get '*path',  to: 'home#index'
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations', passwords: 'passwords', :omniauth_callbacks => 'omniauth_callbacks'}

  resources :reviews
  resources :home
  resources :stores
  resources :items
  resources :profiles
  resources :help
end
