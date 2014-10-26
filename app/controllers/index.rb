get '/' do
  erb :"index"
end

get '/users' do
 @user = User.new
  erb :"/users/index"
end
