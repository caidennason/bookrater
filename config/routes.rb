Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/users', to: "user#index"
  post '/signup', to: "user#create"
  post '/login', to: "session#create"

end
