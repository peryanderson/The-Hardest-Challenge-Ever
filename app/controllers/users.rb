post '/sessions' do
  @user = User.authenticate(params[:email], params[:password])
  if @user
    session[:user_id] = @user.id
    redirect "/games"
  else
    @message = "Invalid."
    erb :"users/index"
  end
end


get '/users/new' do
  @user = User.new()
  erb :"/users/new"
end

# get '/users/:user_id' do
#   @user = User.find_by(id: params[:user_id])
#   erb :"/users/show"
# end

post '/users' do
  @user = User.new(params[:user])
  if @user.save
    session[:user_id] = @user.id
    redirect "/games"
  else
    @message = "That account cannot be created"
    erb :"users/new"
  end
end

delete '/logout' do
  session.delete(:user_id)
  redirect '/users'
end
