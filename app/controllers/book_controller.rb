class BookController < ApplicationController

    def show
        books = Book.where("wishlist = ? OR wishlist IS NULL", false)
        render json: books
    end

    def show_wishlist
        books = Book.where(wishlist: true, user_id: current_user.id)
        render json: books
    end

    def create 
        book = Book.create(book_params)
        if book.valid? 
            render json: book, status: :created
        else
            render json: { error: "Book is not valid" }, status: :unprocessable_entity
        end
    end

    private 
    def book_params
        params.permit(:id, :title, :author, :rating, :about, :photo_url, :user_id, :wishlist)
    end
end