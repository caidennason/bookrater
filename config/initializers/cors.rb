Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Adjust this to allow requests from specific origins
      resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
    end
  end