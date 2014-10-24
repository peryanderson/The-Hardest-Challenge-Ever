get '/' do
  erb :"index"
end

get '/users' do
  if authenticated?
    redirect '/games'
  else
    erb :"/users/index"
  end
end
