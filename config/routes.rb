Rails.application.routes.draw do

  resources :admins
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  get '/hello', to: 'application#hello_world'

  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete' 

  get '/authorized_user', to: 'admins#show'

  get '/academic_posts', to: 'posts#fetchAcademics'
  

  # get '*path',
  #   to: 'fallback#index',
  #   constraints: ->(req) { !req.xhr? && req.format.html? }


end
