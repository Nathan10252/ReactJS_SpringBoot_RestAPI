package com.fullstack.serverspringboot.dto;

public class SearchObject {
	private int pageSize;
	private int pageIndex;
	private String keyword;

	public SearchObject(int pageSize, int pageIndex, String keyword) {
		super();
		this.pageSize = pageSize;
		this.pageIndex = pageIndex;
		this.keyword = keyword;
	}

	public SearchObject() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
}
