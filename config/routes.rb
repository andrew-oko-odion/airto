Rails.application.routes.draw do

  root 'home#index'
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'} 
  resources :reviews
  resources :home
  resources :stores
end
