class User < ActiveRecord::Base
  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :email, format: {with: /.*@.*\..*/ }

  has_many :event_attendances
  has_many :attended_events, through: :event_attendances, source: :event
  has_many :created_events, class_name: "Event"


 def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.hashed_password = @password
  end

  def self.authenticate(email, password)
    user = User.find_by(email: email)

    if user && user.password == password
      return user
    end
  end

end
