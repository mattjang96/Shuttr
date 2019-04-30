class User < ApplicationRecord
  validates :fname, :lname, :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, :email, uniqueness: true
  before_validation :ensure_session_token

  attr_reader :password

  has_many :photos,
    foreign_key: :owner_id

  has_many :albums,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Album"

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Comment"

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

end