require 'rails_helper'

feature 'angular test' do
  let(:email) { 'pat@kien.com' }
  let(:password) { 'password123' }

  before do
    User.create!(email: email,
                password: password,
                password_confirmation: password)
  end

  scenario 'Our Angular Test app is working' do
    visit '/angular_test'

    #Log In
    fill_in 'Email', with: email
    fill_in 'Password', with: password
    click_button 'Log in'

    #Check that we go to the right page
    expect(page).to have_content('Name')

    #Test the page
    fill_in 'name', with: 'Pat'
    within 'h2' do
      expect(page).to have_content('Hello Pat!')
    end
  end
end
