require 'byebug'

class BookController < ApplicationController

    def show
        books = Book.where(wishlist: false, user_id: current_user.id)
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

    def destroy
        book = Book.find_by(id: params[:id])
            if book.user_id == current_user.id 
                book.destroy 
                render json: {message: "Book deleted."}, status: :ok 
            else
                render json: { error: "You can only delete your own books."}
            end
    end

    def update
        book = Book.find_by(id: params[:id])
        book.update(book_params)
        if book.valid? && book.user_id == current_user.id
            render json: book
        else 
            render json: {error: "Incorrect somehow"}, status: :unprocessable_entity
        end
    end

    private 
    def book_params
        params.permit(:id, :title, :author, :rating, :about, :photo_url, :user_id, :wishlist)
    end
end