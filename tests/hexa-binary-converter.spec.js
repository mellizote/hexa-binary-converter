'use strict';

import assert from 'assert'

import { hexa2binary, binary2hexa } from '../lib/hexa-binary-converter';

describe('hexa2binary function Tests', () => {
	describe('hexa2binary("8")', () => {
		it('should to "1000"', () => {
			assert.equal("1000",hexa2binary("8"));
    });
  });
  describe('hexa2binary("9")', () => {
    it('should to "1001"', () => {
      assert.equal("1001",hexa2binary("9"));
    });
  });
  describe('hexa2binary("A")', () => {
    it('should to "1010"', () => {
      assert.equal("1010",hexa2binary("A"));
    });
  });
  describe('hexa2binary("1C")', () => {
    it('should to "00011100"', () => {
      assert.equal("00011100",hexa2binary("1C"));
    });
  });
});

describe('binary2hexa function Tests', () => {
  describe('binary2hexa("1000")', () => {
    it('should to "8"', () => {
      assert.equal("8",binary2hexa("1000"));
    });
  });
  describe('binary2hexa("1001")', () => {
    it('should to "9"', () => {
      assert.equal("9",binary2hexa("1001"));
    });
  });
  describe('binary2hexa("1010")', () => {
    it('should to "A"', () => {
      assert.equal("A",binary2hexa("1010"));
    });
  });
  describe('binary2hexa("11100")', () => {
    it('should to "1C"', () => {
      assert.equal("1C",binary2hexa("11100"));
    });
  });
});