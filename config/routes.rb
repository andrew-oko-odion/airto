Rails.application.routes.draw do

  root 'home#index'
  # get '*path',  to: 'home#index'
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations', passwords: 'passwords'} 
  resources :reviews
  resources :home
  resources :stores
end
