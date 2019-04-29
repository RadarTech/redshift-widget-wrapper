import { expect } from 'chai';

describe('.env', () => {
  it('should populate environment variables', () => {
    expect(process.env.REDSHIFT_WIDGET_URL).to.not.be.undefined;
  });
});
