class ApplicationController < ActionController::Base
  respond_to :js, :json
  protect_from_forgery with: :exception, unless: -> { request.format.json? } 
end
