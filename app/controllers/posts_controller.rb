class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show 
        post = Post.find(params[:id])
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: trip, status: :accepted
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:titile, :body, :category)
    end


end

