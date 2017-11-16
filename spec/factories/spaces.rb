FactoryGirl.define do
  factory :space do
    name "MyString"
    description "MyText"
    location "MyString"
    guest_capacity 1
    fee "9.99"
    user nil
  end
end
