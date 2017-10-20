Rails.application.routes.draw do

  get 'help/index'

  root 'home#index'
  # get '*path',  to: 'home#index'
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations', passwords: 'passwords'} 
  resources :reviews
  resources :home
  resources :stores
  resources :items
  resources :profiles
  resources :help
end
