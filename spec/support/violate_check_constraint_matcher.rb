RSpec::Matchers.define :violate_check_constraint do |constraint_name|
  supports_block_expectations

  match do |code_block|
    begin
      code_block.()
      false
    rescue ActiveRecord::StatementInvalid => ex
      ex.message =~ /#{constraint_name}/
    end
  end
end
