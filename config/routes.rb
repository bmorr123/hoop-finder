Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'registrations' }
  root to: 'welcome#index'

  resources :games
  resources :user_games, only: [:create, :destroy]
end
