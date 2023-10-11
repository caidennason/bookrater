class BookController < ApplicationController

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
        params.permit(:id, :title, :author, :rating, :about, :user_id)
    end
end