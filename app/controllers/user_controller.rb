class UserController < ApplicationController
    def index
        users = User.all 
        render json: users 
    end

    def create 
        user = User.create(user_params)
        if user.valid? 
            render json: user 
        else
            render json: {error: "Make sure everything is completed"}, status: :unprocessable_entity 
        end
    end

    private
    def user_params 
        params.permit(:name, :about_me, :location, :password, :password_confirmation)
    end

end