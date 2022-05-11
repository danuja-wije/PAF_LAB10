package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ItemServlet
 */
@WebServlet("/ItemServlet")
public class ItemServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    Item itemObj = null;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ItemServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("come to post");
		Item item = new Item();
		String output = item.insertItem(request.getParameter("itemCode"), request.getParameter("itemName"), request.getParameter("itemPrice").toString(), request.getParameter("itemDesc"));
		response.getWriter().write(output);

	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Item item = new Item();
		System.out.println("come to delete");
		Map paras = getParasMap(request);
		String output = item.deleteItem(Integer.parseInt(paras.get("itemID").toString()));
		System.out.println(output);
		response.getWriter().write(output); 
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("came here");
		Item item = new Item();
		// TODO Auto-generated method stub
		Map<String, String> map = new HashMap<String, String>();
		map.put("status", "success");
		map.put("data", "no data found");
		//String output = "{\"status\":\"success\", \"data\": \"" + map + "\"}";
		Map paras = getParasMap(request);
		String output = item.updateItem(paras.get("hidItemIDSave").toString(), paras.get("itemCode").toString(), paras.get("itemName").toString(),paras.get("itemPrice").toString(), paras.get("itemDesc").toString());
		response.getWriter().write(output); 
		
	}
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) 
	{ 
		Map<String, String> map = new HashMap<String, String>(); 
		try
		{ 
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
			String queryString = scanner.hasNext() ? 
					scanner.useDelimiter("\\A").next() : ""; 
			scanner.close(); 
			String[] params = queryString.split("&"); 
			for (String param : params) 
			{ 
				String[] p = param.split("="); 
				map.put(p[0], p[1]); 
			} 
		} 
		catch (Exception e) 
		{ 
		} 
		return map; 
	}
}
