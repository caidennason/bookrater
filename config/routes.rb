Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/users', to: "user#index"
  post '/signup', to: "user#create"
  post '/login', to: "session#create"
  delete '/logout', to: "session#destroy"
  get '/books', to: "book#show"
  get '/wishlistbooks', to: "book#show_wishlist"
  patch '/rate', to: "book#rate"

  post '/submit', to: "book#create"
  delete '/books/:id', to: "book#destroy"

  get '/me', to: "user#show"

end
