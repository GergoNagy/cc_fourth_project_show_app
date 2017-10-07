Rails.application.routes.draw do

  scope path: 'api' do
    resources :users, param: :name
  end

end
