Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/restricted'

  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset', to: 'passwords#reset'
  
  devise_for :users

 # resources :blog, only: [:index, :show, :create, :update, :destroy]

  resources :articles do
    collection do
      get 'myblog'
    end
  end

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
