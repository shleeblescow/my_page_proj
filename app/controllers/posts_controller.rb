class PostsController < ApplicationController

    skip_before_action :authorized_admin, only: [:show, :index, :fetchAcademics, :fetchPassions, :fetchProjects]

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

    def fetchAcademics
        acaPost = Post.where(category: 'academics')
        render json: acaPost
    end

    def fetchProjects
        projPost = Post.where(category: 'projects')
        render json: projPost
    end

    def fetchPassions
        passPost = Post.where(category: 'passions')
        render json: passPost
    end


    private

    def post_params
        params.permit(:title, :body, :category)
    end


end

