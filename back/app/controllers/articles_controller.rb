class ArticlesController < ApplicationController
  # before_action :authenticate_devise_api_token!, only: [:my_blog]
  before_action :authenticate_devise_api_token!, only: [:myblog]

    def index
      # access_token = request.headers['Authorization']
      articles = Article.all

      # if access_token.blank?
        # render json: { error: 'Access token is missing'}

      # else
        render json: articles, status:200
        # render json: current_devise_api_user.orders, status: :ok
      # end
    end

    def myblog
      devise_api_token = current_devise_api_token
      articles  = devise_api_token.resource_owner.articles
      render json: articles, status:200
      # articles = current_user.articles
      # render json: articles
    end

  
    def show

      article = Article.find_by(id: params[:id])
      if article
        render json: article, status:200
      else
        render json: {
          error: "Article not found"
        }
      end
    end
  
    def create
     # article = current_user.articles.build(article_params)
    #  raise "Request parameters: #{params.inspect}"
      token = request.headers['Authorization']
      article = Article.new(article_params)
      article.user = current_devise_api_user
      
      if article.save
        render json: article, status:200
      else
        render json: {
          error:"Error while Creating...."
          # user: current_user
        }, status:500
      end
    end
  
    def update
      article = Article.find_by(id: params[:id])
      if article
        article.update(title: params[:title], body: params[:body], author: params[:author])
        render json: "Article record is Updated Successfully"
      else
        render json:{
          error: "Error to Update..."
        }
      end
    end
  
    def destroy
      article = Article.find_by(id: params[:id])
      if article
        article.destroy
        render json: "Deleted Successfully"
      else
        render json:{
          error: "Error to Delete..."
        }
      end
    end
  
    private
    def article_params
      params.require(:article).permit(
        :title,
        :body,
        
    )
    end
  end
  