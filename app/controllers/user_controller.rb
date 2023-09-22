
class UserController < ApplicationController

    def index
        users = User.all 
        render json: users 
    end

    def create 
        if params[:password] == params[:password_confirmation]
            user = User.create(user_params)
                if user.valid? 
                    session[:user_id] = user.id
                    render json: user, status: :created
                else
                    render json: {error: "Make sure everything is completed"}, status: :unprocessable_entity 
                end
        else
            render json: {error: "Passwords must match."}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by_id(session[:user_id])
        render json: user
    end

    private
    def user_params 
        params.permit(:name, :about_me, :location, :password, :password_confirmation)
    end

end