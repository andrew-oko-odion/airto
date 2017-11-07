class User < ApplicationRecord
  # validates :name, :login, :email, presence: true
  validates_presence_of [:email, :password, :lastname, :firstname, :birthday], on: :create
  # validates_presence_of [:email, :password], on: :
  #  mount_uploader :avatar, AvatarUploader
  
  acts_as_token_authenticatable
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, #:confirmable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook] , 
         :authentication_keys => {email: true} 


  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end
  
  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
        user.image = auth.info.image
      end
  end
  
end
