class User < ApplicationRecord
  # validates_presence_of [:email, :password, :lastname, :firstname, :birthday], on: :create
  # validates_presence_of [:email, :password], on: :
  acts_as_token_authenticatable
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, #:confirmable,
         :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => {email: true}
end
